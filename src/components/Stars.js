import Star from './Star';

function Stars({ count }) {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(i + 1);
  }

  const stars = list.map((item) => (
    <Star key={item} />
  ));

  let visibleStars = count >= 1 && count <= 5 ? stars : false;

  return <ul className="card-body-stars u-clearfix">{visibleStars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;
