import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color : 'green',
        fontSize : 21,
    };
    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined )}
                >
                    post {id}
                </NavLink>
        </li>
    );
};

export default Articles;