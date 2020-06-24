const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

// Middleware
// Interceptador de requisições
// Pode interromper totalmente a requisição ou alterar os dados dela
function logRequests(request, response, next) {
    const {method, url} = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.time(logLabel); // junto com timeEnd para calcular o tempo da requisição
    // chama a próxima função, sem isso entrará em loop aqui
    // return next();
    next(); // agora sem o return para continuar a execução
    console.timeEnd(logLabel);  // junto com time para calcular o tempo da requisição
}

// valida se o ID da requisição é válido
function validateProjectId(request, response, next) {
    const {id} = request.params;
    // se o ID não é válido (no formato UUID) retorna um erro
    if(!isUuid(id)) {
        return response.status(400).json({error: 'Invalid project ID.'});
    }
    return next();
}

app.use(logRequests);
// ao invés de passar o middleware na função
// app.put('/projects/:id', validateProjectId, (request, response) => {
// pode-se passar a rota que o utilizará
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
    const {title} = request.query;

    // verifica se o usuário passou um filtro
    // se sim, procura em projects e retorna se a busca tem o title
    // caso contrário retorna todos os projects
    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };
    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }
    projects.splice(projectIndex, 1);   // remove o índice e 1 posição a partir dele

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('Back-end started!')
});
