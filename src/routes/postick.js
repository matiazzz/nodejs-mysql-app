const express = require('express');
const Postick = require('../models/postick')
const router = express.Router();

router.get('/posticks', (req, res) => {
  Postick.getAll((err, data) => {
    res.status(200).json(data);
    // error
  });
});

router.get('/posticks/:id', (req, res) => {
  Postick.getById(req.params.id, (err, data) => {
    res.json(data[0]);
    // error
  });
});

router.post('/posticks', (req, res) => {
  const postickData = {
    id: null,
    title: req.body.title,
    description: req.body.description,
    created_at: null,
    updated_at: null
  };
  Postick.create(postickData, (err, data) => {
    if(data && data.insertId) {
      res.json({
        success: true,
        mssg: "new postick created",
        data: data
      });
    } else {
        res.status(500).json({
          success: false,
          mssg: 'error creating a postick',
          error: err
        });
      }
  });
});

router.put('/posticks/:id', (req, res) => {
  const postickData = {
    id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    created_at: null,
    updated_at: null
  };
  Postick.update(postickData, (err, data) => {
    if (data && data.mssg) {
      res.json({data});
    } else {
      res.status(500).json({
        success: false,
        mssg: 'error updating postick'
      });
    }
  });
});

router.delete('/posticks/:id', (req, res) => {
  Postick.delete(req.params.id, (err, data) => {
    if (data && data.mssg === 'postick deleted' || data.mssg === 'not exists postick') {
      res.json({
        success: true,
        data
      });
    } else {
      res.status(500).json({
        success: false,
        mssg: 'error on delete postick'
      })
    }
  });
});



module.exports = router;
