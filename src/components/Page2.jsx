export const Page2 = () => {
  return (
      <div>
          <h1>Page2ページです</h1>
          <Link to="/page2/100">URL UrlParameter</Link>
          <br />
          <Link to="/page2/100?name=hoghoge">Query Parameter</Link>
      </div>
  );  
};