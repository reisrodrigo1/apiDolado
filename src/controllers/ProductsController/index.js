const Product = require('../../models/Product')

const ProductsController = {
 
    async createProduct(req,res){
        const bodyData = req.body
        const { user_id } = req.params
        try{
            const data  = {username: user_id, ...bodyData}

            const newProduct = await Product.create(data)
            await newProduct.populate('username').execPopulate()

            return res.status(200).json(newProduct)
        } catch(err){
            return res.status(400).json(err)
        }
    },
    async getUserProducts(req,res){
      const  { user_id } = req.params

      try{
          const productsOfAnUser = await Product.find({username: user_id})
          return res.status(200).json(productsOfAnUser)
      }catch(err){
        return res.status(400).json(err)
    }
    },
    async updateProducts(req,res){

        const bodyData = req.body
        const { product_id , user_id } = req.params

        try{
            const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new: true})
            return res.status(200).json(updatedProduct)
        }catch(err){
        return res.status(400).json(err)
    }
    },
    async deleteProducts(req,res){

        const { product_id , user_id } = req.params

        try{
            const deletedProduct = await Product.findByIdAndDelete(product_id)
            return res.status(200).json(deletedProduct)
        }catch(err){
        return res.status(400).json(err)
    }

    }, 
    async getAll(req,res){

        try{
            const products = await Product.find()
            return res.status(200).json(products)
        }catch(err){
        return res.status(400).json(err)
        }
       
    },
    async getProductById(req,res){
        const { product_id } = req.params

        try{
            const products = await Product.findById(product_id)
            return res.status(200).json(products)
        }catch(err){
        return res.status(400).json(err)
        }
       
    }

}

module.exports = ProductsController