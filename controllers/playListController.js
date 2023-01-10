const express = require("express");


const { PlayList } = require("../models/playListModel");


exports.createPlayList = async (req, res) => {
    const body = req.body;
    const result = await new PlayList(body).save();
    res.send(result)
}

exports.getPlaylist = async (req, res) => {
    const result = await PlayList.find({});
    res.send(result)
}

exports.deletePlaylist = async (req, res) => {
    const id = req.params.id;
    await PlayList.findByIdAndDelete({ _id: id });
    res.send("deleted");
}

exports.updatePlaylist = async (req, res) => {
    const id = req.params.id;
    const songId = req.body.id;

    const playlist = await PlayList.findById(id);

    playlist.songs.push(songId);

    await playlist.save()

    res.send("updated");
}

exports.getSpecififcPlaylist = async (req, res) => {
    const id = req.params.id;
    const playlist = await PlayList.findById(id).populate("songs");
    // playlist.save();
    res.send(playlist);
    // const result = await PlayList.findById(req.params.id).populate("songs");
}