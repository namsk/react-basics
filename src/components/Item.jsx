import PropTypes from "prop-types"; // npm install prop-types

// function Item(props) {
function Item({ name, checked = false }) {
  // 구조분해 할당
  //   console.log(props);
  console.log(name, checked);
  return (
    <div>
      <input type="checkbox" checked={checked} />
      <label>{name}</label>
    </div>
  );
}

//
// Item 컴포넌트의 props 타입 정의
Item.propTypes = {
  // name은 문자열 타입이며 필수 prop입니다.
  name: PropTypes.string.isRequired,
  // bought는 불리언 타입이며 선택 prop입니다.
  checked: PropTypes.bool,
};

/*
Item.defaultProps = {
  name: "Unnamed",
  checked: false,
};
*/

export default Item;
