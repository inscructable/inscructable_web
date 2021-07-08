class Solvedac {
    getTier(x) {
        let rng = [ 30, 60, 90, 120, 150, 200, 300, 400, 500, 650, 800, 950, 1100, 1250, 1400, 1600, 1750, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2850, 2900, 2950, 3000, 9999 ];
        if (x >= 9999) return null;
        if (x < rng[0]) return 0;
        for (let i = 0; ; ++i) {
            if (x >= rng[i] && x < rng[i + 1]) return i + 1;
        }
    }
}

export default new Solvedac();