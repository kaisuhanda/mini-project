import Header from "../components/header"
import Footer from "../components/footer"

function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;