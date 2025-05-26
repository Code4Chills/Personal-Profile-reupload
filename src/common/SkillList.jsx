function SkillList({ src, skill }) {
  return (
    <span>
      <ul>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
      </ul>
    </span>
  );
}

export default SkillList;