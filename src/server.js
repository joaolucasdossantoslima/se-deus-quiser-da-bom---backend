const express = require('express');
const app = express();

app.use(express.json());
const PrivateRoutes = express.Router();


// controlers
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserController = require('./controllers/UserController');
const ImageController = require('./controllers/ImageController');
const OptionController = require('./controllers/OptionController')

// validações
const CategoryValidaçao = require('./middlewares/CategoryMiddlewares/CategoryValidaçao');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');
const ImageCreateValidação = require('./middlewares/ProductImageMiddlewares/ImageCreateValidação');
const OptionCreateValidation = require('./middlewares/OptionsMiddlewares/OptionCreateValidation');

// Validações de existencia de ID
const ProductUpdate_DeleteValidation = require('./middlewares/ProductMiddleware/ProductUpdate_DeleteValidation');
const CategoryPut_DeleteValidation = require('./middlewares/CategoryMiddlewares/CategoryPut_DeleteValidation');
const UserPut_DeleteValidadtion = require('./middlewares/UsersMiddlewares/UserPut_DeleteValidation');
const OptionPut_Delete = require('./middlewares/OptionsMiddlewares/OptionPut_Delete');
const ImagePut_Delete = require('./middlewares/ProductImageMiddlewares/ImagePut_Delete');

//jwt
const JwtVerifyToken = require('./middlewares/JwtVerification/JwtVerifyToken');

PrivateRoutes.use(JwtVerifyToken);

//products
PrivateRoutes.post('/V1/products',ProductCreateValidation, ProductController.create);
app.get('/V1/products', ProductController.list);
PrivateRoutes.put('/V1/products/:id', ProductUpdate_DeleteValidation, ProductController.update);
PrivateRoutes.delete('/V1/products/:id',ProductUpdate_DeleteValidation, ProductController.delete);
app.get('/V1/products/:id',ProductUpdate_DeleteValidation,ProductController.listarUma);

//category
PrivateRoutes.post('/V1/Category', CategoryValidaçao,CategoryController.create);
app.get('/V1/Category', CategoryController.list);
PrivateRoutes.put('/V1/Category/:id',CategoryPut_DeleteValidation, CategoryController.update);
PrivateRoutes.delete('/V1/Category/:id',CategoryPut_DeleteValidation, CategoryController.delete);

//user
app.post('/v1/users/token',UserController.create);
app.get('/V1/users',UserController.list);
app.get('/V1/users/:id',UserPut_DeleteValidadtion, UserController.listarUma);
PrivateRoutes.put('/V1/users/:id',UserPut_DeleteValidadtion, UserController.update);
PrivateRoutes.delete('/V1/users/:id',UserPut_DeleteValidadtion, UserController.delete);
app.post('/V1/users/login',UserController.login);

//image
PrivateRoutes.post('/V1/images',ImageCreateValidação, ImageController.create);
app.get('/V1/images', ImageController.list);
app.get('/V1/images/:id',ImagePut_Delete, ImageController.listarUma);
PrivateRoutes.put('/V1/images/:id',ImagePut_Delete, ImageController.update);
PrivateRoutes.delete('/V1/images', ImageController.delete);
PrivateRoutes.delete('/V1/images/:id',ImagePut_Delete, ImageController.deletaUma);

//option
PrivateRoutes.post('/V1/option',OptionCreateValidation, OptionController.create);
app.get('/V1/option', OptionController.list);
app.get('/V1/option/:id',OptionPut_Delete, OptionController.listarUma);
PrivateRoutes.put('/V1/option/:id',OptionPut_Delete, OptionController.update);
PrivateRoutes.delete('/V1/option', OptionController.delete);
PrivateRoutes.delete('/V1/option/:id',OptionPut_Delete, OptionController.deletaUma);

app.use(PrivateRoutes);

app.listen(5002);
