var restify = require('restify');


const server = restify.createServer({
    name: 'unipbiblio',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', function (req, res, next) {
    res.json({ mensagem: "Servidor ativado" });
    next();
}
);

/**
Resources
@type {AutorResource|*|exports|module.exports}
*/
var AutorResource = require('./resources/autorResource');
autorResource = new AutorResource();
/**
* GET - Resource Autor
*/
server.get('/api/v1/unip/biblioteca/autor', autorResource.findAll);
/**
 * GET - Resource Autor
 */
server.get('/api/v1/unip/biblioteca/autor/:auId', autorResource.findId);
/**
 * POST - Resource Autor
 */
server.post('/api/v1/unip/biblioteca/autor', autorResource.insert);
/**
 * PUT - Resource Autor
 */
server.put('/api/v1/unip/biblioteca/autor/:auId', autorResource.update);
/**
 * DELETE - Resource Autor
 */
server.del('/api/v1/unip/biblioteca/autor/:auId', autorResource.delete);

/**
Resources
@type {LivroResource|*|exports|module.exports}
*/
var LivroResource = require('./resources/livroResource');
livroResource = new LivroResource();
/**
* GET - Resource Livros
*/
server.get('/api/v1/unip/biblioteca/livro', livroResource.findAll);
/**
 * GET - Resource Livros
 */
server.get('/api/v1/unip/biblioteca/livro/:lvId', livroResource.findId);
/**
 * POST - Resource Livros
 */
server.post('/api/v1/unip/biblioteca/livro', livroResource.insert);
/**
 * PUT - Resource Livros
 */
server.put('/api/v1/unip/biblioteca/livro/:lvId', livroResource.update);
/**
 * DELETE - Resource Livros
 */
server.del('/api/v1/unip/biblioteca/livro/:lvId', livroResource.delete);

/**
Resources
@type {usuarioResource|*|exports|module.exports}
*/
var UsuarioResource = require('./resources/usuarioResource');
usuarioResource = new UsuarioResource();
/**
* GET - Resource Usuario
*/
server.get('/api/v1/unip/biblioteca/usuario', usuarioResource.findAll);
/**
 * GET - Resource Usuario
 */
server.get('/api/v1/unip/biblioteca/usuario/:usId', usuarioResource.findId);
/**
 * POST - Resource Usuario
 */
server.post('/api/v1/unip/biblioteca/usuario', usuarioResource.insert);
/**
 * PUT - Resource Usuario
 */
server.put('/api/v1/unip/biblioteca/usuario/:usId', usuarioResource.update);
/**
 * DELETE - Resource Usuario
 */
server.del('/api/v1/unip/biblioteca/usuario/:usId', usuarioResource.delete);
/**
* GET - Resource Usuario
*/
//server.get('/api/v1/unip/biblioteca/usuario/:usNome', usuarioResource.login);
server.post('/api/v1/unip/biblioteca/login', async(req, res)=>{
    const {usu, senha} = req.body;
    const user = usuarioEntity.findone({usNome, usSenha});
    if(!user)
    return res.status(400).send({error:'user not found'});

    res.send({user});
    
});
/**
Resources
@type {emprestimoResource|*|exports|module.exports}
*/
var emprestimoResource = require('./resources/emprestimoResource');
emprestimoResource = new emprestimoResource();
/**
* GET - Resource Emprestimo
*/
server.get('/api/v1/unip/biblioteca/emprestimo', emprestimoResource.findAll);
/**
 * GET - Resource Emprestimo
 */
server.get('/api/v1/unip/biblioteca/emprestimo/:emId', emprestimoResource.findId);
/**
 * POST - Resource Emprestimo
 */
server.post('/api/v1/unip/biblioteca/emprestimo', emprestimoResource.insert);
/**
 * PUT - Resource Emprestimo
 */
server.put('/api/v1/unip/biblioteca/emprestimo/:emId', emprestimoResource.update);
/**
 * DELETE - Resource Emprestimo
 */
server.del('/api/v1/unip/biblioteca/emprestimo/:emId', emprestimoResource.delete);

/**
Resources
@type {livroAutorResource|*|exports|module.exports}
*/
var LivroAutorResource = require('./resources/livroAutorResource');
livroAutorResource = new LivroAutorResource();
/**
* GET - Resource LivroAutor
*/
server.get('/api/v1/unip/biblioteca/livroAutor', livroAutorResource.findAll);
/**
 * GET - Resource LivroAutor
 */
server.get('/api/v1/unip/biblioteca/livroAutor/:lvId', livroAutorResource.findId);
/**
 * POST - Resource LivroAutor
 */
server.post('/api/v1/unip/biblioteca/livroAutor', livroAutorResource.insert);
/**
 * PUT - Resource LivroAutor
 */
server.put('/api/v1/unip/biblioteca/livroAutor/:lvId', livroAutorResource.update);
/**
 * DELETE - Resource LivroAutor
 */
server.del('/api/v1/unip/biblioteca/livroAutor/:lvId', livroAutorResource.delete);



const PORT = 3000;
server.listen(PORT, function () {
    console.log('%s ativado no endereco http://localhost:%i', server.name, PORT);
});