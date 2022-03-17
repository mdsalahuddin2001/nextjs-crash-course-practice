import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {
  const foundItem = articles.find((article) => article.id === id);
  if (foundItem) {
    res.status(200).json(foundItem);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
