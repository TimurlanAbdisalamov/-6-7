import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector((state) => state.reducer.categories);
    const cart = useSelector((state) => state.reducer.cart);

    const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

    return (
        <header className='header'>
            <div className="header-container container">
                <h1 className='header-logo'><Link to={'/'}>shop</Link></h1>
                <nav className="header-nav">
                    {categories.map((item) => (
                        <Link
                            key={item}
                            to={`/category/${item}`}
                            className='header-nav-link'
                        >
                            {item}
                        </Link>
                    ))}
                    <Link to={'/'} className='header-nav-link'>home</Link>
                    <div className="header-cart">
                        <Link to={'/cart'} className='header-nav-link'>
                            cart
                        </Link>
                        {totalItems > 0 && (
                            <span className="header-cart-badge">{totalItems}</span>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
