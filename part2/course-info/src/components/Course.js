const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

function Total({ sum }) {
  return (
    <b>
      Total of{" "}
      {sum.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
      )}{" "}
      exercises
    </b>
  );
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={parts} />
    </>
  );
};
const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
