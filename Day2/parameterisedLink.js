import { Link } from "react-router-dom";

const linkingComp = () => {
    return (
        <div>
            <h1>LinkingExample</h1>
            <h2>Click on a user to view their profile:</h2>
            <ul>
                {/* Param link */}
                <li><Link to="/user/1">User 1</Link></li>
                <li><Link to="/user/2">User 2</Link></li>
                <li><Link to="/user/3">User 3</Link></li>
                {/* Query link */}
                <li><Link to="/products?search=phone&sort=asc"></Link></li>
                <li><Link to="/products?search=laptop"></Link></li>
                <li><Link to="/products"></Link></li>
            </ul>
            {/* Mapped Param link */}
            const users = [1, 2, 3];
            return (
            <ul>
                {users.map(id => (
                    <li key={id}>
                        {/* Notice the template literal string -> "Navigation Expression" */}
                        <Link to={`/user/${id}`}>User {id}</Link>
                    </li>
                ))}
            </ul>
            );
        </div>
    );
};


export default linkingComp;
