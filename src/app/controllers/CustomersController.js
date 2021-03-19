import Customer from '../models/Customer';

const customers = [
  { id: 1, name: 'Dev Samurai', site: 'http://devsamurai.com.br' },
  { id: 2, name: 'Google', site: 'http://google.com' },
  { id: 3, name: 'UOL', site: 'http://uol.com.br' },
];

class CustomersController {
  async index(req, res) {
    console.log('cheguei aqui!');
    const data = await Customer.findAll({
      limit: 1000,
    });
    console.log(data);
    return res.json(data);
  }

  async show(req, res) {
    const { id } = parseInt(req.params.id, 10);
    console.log(`Meu ID: ${id}`);

    const customer = await Customer.findOne({ where: { id } });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found!' });
    }
    return res.json(customer);
  }

  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCostumer = { id, name, site };

    customers.push(newCostumer);

    return res.status(201).json(newCostumer);
  }

  update(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name, site } = req.body;

    const customerIndex = customers.findIndex(item => item.id === id);

    if (customerIndex === -1) {
      return res.status(404).json({ error: 'Customer not found.' });
    }

    const newCostumer = {
      id,
      name: name || customers[customerIndex].name,
      site: site || customers[customerIndex].site,
    };

    customers[customerIndex] = newCostumer;

    return res.status(200).json(newCostumer);
  }

  destroy(req, res) {
    const id = parseInt(req.params.id, 10);

    const customerIndex = customers.findIndex(item => item.id === id);

    if (customerIndex >= 0) {
      customers.splice(customerIndex, 1);
    } else {
      return res.status(404).json({ error: 'Customer not found.' });
    }

    return res.status(204).json();
  }
}

export default new CustomersController();
