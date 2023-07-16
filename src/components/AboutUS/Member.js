function member(props) {
  return (
    <div class="member-container">
      <img src={props.image} alt="image" class="member-img" />
      <div class="member-content">
        <h3 className="member-name">{props.name}</h3>
        <p class="member-discription">{props.prag}</p>
      </div>
    </div>
  );
}
export default member;
