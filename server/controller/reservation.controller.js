const { Reservation } = require("../database/index.js");
module.exports = {
  getAll: async (req, res) => {
    try {
      const all = await Reservation.findAll();
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  getById: async (req, res) => {
    try {
      const all = await Reservation.findAll({
        where: {
          userId: req.params.userId,
        },
      });
      res.json(all);
    } catch (error) {
      throw error;
    }
  },

  updateById: async (req, res) => {
    try {
      await Product.update(req.body, { where: { id: req.params.reser } });
      res.json({
        status: "success",
        message: "Reservation updated successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },

  deleteById: async (req, res, next) => {
    try {
      await Product.destroy({ where: { id: req.params.reser } });
      res.json({
        status: "success",
        message: "Reservation deleted successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },
  add: async (req, res) => {
    try {
      await Product.create(req.body);
      res.json({
        status: "success",
        message: "Reservation added successfully!!!",
        data: null,
      });
    } catch (err) {
      throw err;
    }
  },
};
