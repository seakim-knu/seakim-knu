import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
            <Link to="/about">introduction</Link>
        </li>
        <li>
            <Link to="/profiles/seahkim">seahkim's profile</Link>
        </li>
        <li>
            <Link to="profiles/gildong">gildong's profile</Link>
        </li>
        <li>
            <Link to="/profiles/void">This profile not exists.</Link>
        </li>
        <li>
            <Link to="/articles">post lists</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;