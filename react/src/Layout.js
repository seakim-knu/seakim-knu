import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

const goBack = () => {
    navigate(-1);
};

const goArticles = () => {
    navigate('/articles', { replace: true });
};

    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                <button onClick={goBack}>back</button>
                <button onClick={goArticles}>post lists</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;