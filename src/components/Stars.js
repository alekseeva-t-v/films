import Star from './Star';

/**
 * Компонент отвечающий за отображение блока рейтингов
 *
 * @param {number} props.count Число, означающее количество звезд рейтинга.
 */
function Stars(props) {
  const { count } = props;

  if (count < 1 || count > 5) {
    return null;
  }

  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(i + 1);
  }

  const stars = list.map((item) => <Star key={item} />);

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;
