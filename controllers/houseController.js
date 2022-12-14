const houseDao = require("../services/houseService.js")
const houseService = houseDao.getInstance();

const getAll = async (req, res) => {
    try {
      const products = await houseService.getAll();
      return res.json(products)
      
    } catch (err) {
      console.log(err)
    }
  };

  const renderProducts = async (req, res) => {
    try {
      const products = await houseService.getAll();
      res.render('products', { products })
      
    } catch (err) {
      console.log(err)
    }
  };

  const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        res.json(await houseService.createProduct(req.body))
    } catch (err) {
      console.log(err)
    }
  };

  const updateProducts = async (req, res) => {
    try {
        res.json(await houseService.updateProducts(req.body, req.params.id))
      
    } catch (err) {
      console.log(err)
    }
  }; 

  const getById = async (req, res) => {
    try {
        console.log(req.params._id)
        res.json(await houseService.getById(req.params._id))
      
    } catch (err) {
      console.log(err)
    }
  }; 

  const getByLocation = async (req, res) => {
    try {
        const products = await houseService.getByLocation(req.params.location)
        res.render('products', { products })
      
    } catch (err) {
      console.log(err)
    }
  };
  const getByPrice = async (req, res) => {
    try {
        const products = await houseService.getByPrice(req.params.price)
        res.render('products', { products })
      
    } catch (err) {
      console.log(err)
    }
  }; 

  const deleteById = async (req, res) => {
    try {
        res.json(await houseService.deleteById(req.params.id))
      
    } catch (err) {
      console.log(err)
    }
  }; 

  const renderProductById = async (req, res) => {
    try {
        const house = await houseService.getById(req.params._id);
        console.log(req.params._id)
        //res.json(await houseService.getById(req.params._id))
        res.render('houseById', { house })

    } catch (err) {
      console.log(err)
    }
  }; 

  module.exports =  {getAll, getById, createProduct, updateProducts, deleteById, getByPrice, renderProducts, getByLocation, renderProductById}