const joi = require('joi');
const { Project } = require('../models/Project');

module.exports = {
    // @ts-ignore
    getAll: async function (req, res, next) {
        try {
            const result = await Project.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting projects' });
        }
    },

    // @ts-ignore
    getOne: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error get details`;
            }

            const project = await Project.findById(value.id);
            if (!project) throw "Invalid project id, no such project.";
            res.json(project);
        }
        catch (err) {
            res.status(400).json({ error: "Invalid data" });
            console.log(`Error: ${err}`);
        }
    },

    // @ts-ignore
    addNew: async function (req, res, next) {
        try {
            const schema = joi.object({
                title: joi.string().min(2).max(256).required(),
                description: joi.string().min(2).max(1024).required(),
                status: joi.string().required(),
                image: joi.string().allow(null, '')
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error add project';
            }

            const project = new Project(value);
            const newProject = await project.save();
            res.json(newProject);
        }
        catch (err) {
            // @ts-ignore
            console.log(err.message);
            res.status(400).json({ error: `error adding project` });
        }
    },

    // @ts-ignore
    updateDetails: async function (req, res, next) {
        try {
            const schema = joi.object({
                title: joi.string().min(2).max(256).required(),
                description: joi.string().min(2).max(1024).required(),
                status: joi.string().required(),
                image: joi.string().allow(null, '')
            }).min(1);

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error updating project';
            }

            const filter = {
                _id: req.params.id
            };

            const project = await Project.findOneAndUpdate(filter, value);
            if (!project) throw "No project with this ID in the database";
            const updated = await Project.findById(project._id);
            res.json(updated);
        }
        catch (err) {
            // @ts-ignore
            console.log(err.message);
            res.status(400).json({ error: `error updating details` });
        }
    },

    // @ts-ignore
    deleteOne: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error delete project`;
            }

            const deleted = await Project.findOneAndRemove({
                _id: value.id
            });

            if (!deleted) throw "failed to delete";
            res.json(deleted);
        }
        catch (err) {
            // @ts-ignore
            console.log(err.message);
            res.status(400).json({ error: `error delete project` });
        }
    },
}