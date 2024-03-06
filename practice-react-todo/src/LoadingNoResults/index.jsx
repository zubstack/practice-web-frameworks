function LoadingNoResults({ search }) {
  return (
    <h1 className="TaskContainer-Empty-Title">
      No results for: &apos; {search} &apos;
    </h1>
  );
}

export default LoadingNoResults;
