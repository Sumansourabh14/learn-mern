const asyncHandler = require('express-async-handler');
const express = require('express');
const GoalModel = require('../models/goalsModel');

// fetch list of goals
exports.getGoals = asyncHandler(async (req, res) => {
    const goals = await GoalModel.find();

    if (goals.length === 0) {
        res.status(404);
        throw new Error("No goals were found :(");
    }

    res.json(goals);
})

// create a goal
exports.createGoal = asyncHandler(async (req, res) => {
    if (!req.body.goal) {
        res.status(400)
        throw new Error("Please enter something in body!");
    }

    const newGoal = await GoalModel.create({ goal: req.body.goal });

    res.status(200).send(newGoal);
})

// update a goal
exports.updateGoal = asyncHandler(async (req, res) => {
    const goal = await GoalModel.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('No goal found :(');
    }

    const updatedGoal = await GoalModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(updatedGoal);
})

// delete a goal
exports.deleteGoal = asyncHandler(async (req, res) => {
    const goal = await GoalModel.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("No goals were found");
    }

    await goal.remove();

    res.json({ id: req.params.id });
})