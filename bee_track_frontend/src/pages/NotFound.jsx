function NotFound() {
    return (
        <div className={'w-full h-full flex flex-col justify-center items-center mt-20'}>
            <h1 className="text-4xl fw-bold"><span className="text-primary-yellow">404</span> - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;