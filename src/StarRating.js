//Flex lays divs side by side, alignItems will center them vertically, gap will add space between them
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  //Remember in jsx we use camelCase for css properties
  lineHeight: "1",
  margin: "0",
};

//Creating a reusable StarRating component where the user can pass the maxRating as a prop and choose maxRating. Default is 5.
export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
