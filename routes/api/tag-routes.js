const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/api/tags', async (req, res) => {
  try {
    const tagData = await Tag.findAll(
      {
        include: [{ model: Product }]
      }
    );
    res.status(200).json({ tagData });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/api/tags/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(
      req.params.id,
      {
        include: [{ model: ProductTag }]
      }
    );
    res.status(200).json({ tagData });
  
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/api/tags', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json({ tagData });
  
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/api/tags/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ tagData });
  
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/api/tags/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ tagData });
  
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
