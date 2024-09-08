const homeController = (req, res) => {
    const data = {
        name: "Yupindra",
    };

    res.render('index', data);
};

export {homeController};