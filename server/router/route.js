
  
  const channels = require("../../channel.json");
  /* console.log(channels);
  console.log(channels.data.multicast); */
  
module.exports = app => {
    app.get("/", (req, res) => {
      res.send("Node JS api");
    });
    
    app.get("/api/channels", (req, res) => {
      res.send(channels.data);
    });
    
    app.get("/api/channel/:id", (req, res) => {
      const channel = channels.data.find((c) => c.id === parseInt(req.params.id));
    
      if (!channel) return res.status(400).send("Canal no encontrado");
      else res.send(channel);
    });
    app.get("/api/numero/:numero", (req, res) => {
      const number = channels.data.find((c) => c.numero === req.params.numero);
    
      if (!number) return res.status(400).send("Canal no encontrado");
      else res.send(number);
    });
    
    app.get("/api/proveedor/:proveedor", (req, res) => {
      const proveedor = channels.data.filter(
        (c) => c.proveedor === req.params.proveedor
      );
    
      if (!proveedor) return res.status(400).send("Canal no encontrado");
      else res.send(proveedor);
    });
    app.get("/api/categoria/:tipo", (req, res) => {
      const tipo = channels.data.filter((c) => c.tipo === req.params.tipo);
    
      if (!tipo) return res.status(400).send("Categoria no encontrada");
      else res.send(tipo);
    });
    app.get("/api/name/:nombre", (req, res) => {
      const nombre = channels.data.filter((c) => c.nombre === req.params.nombre);
    
      if (!nombre) return res.status(400).send("Canal no encontrado");
      else res.send(nombre);
    });

}

  
 