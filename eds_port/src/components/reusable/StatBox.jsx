function StatBox({ title, value }) {
    return (
        <div className="flex flex-col bg-primary-blue rounded-lg gap-5 w-[200px] h-[200px]">
            <div className="flex flex-col mt-auto">
                <span className="text-3xl text-center">{title}</span>
            </div>
            <span className="text-7xl text-center mb-auto font-bold">{value}</span>
        </div>
    );
}

export default StatBox;
