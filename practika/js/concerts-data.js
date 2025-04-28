const concertsData = [
    {
        city: "Минск",
        month: "июль",
        date: "8 июля 2024",
        venue: "Клуб «Реактор»"
    },
    {
        city: "Минск",
        month: "август",
        date: "18 августа 2024",
        venue: "Prime Hall"
    },
    {
        city: "Минск",
        month: "октябрь",
        date: "12 октября 2024",
        venue: "Дворец спорта"
    },
    {
        city: "Краснодар",
        month: "август",
        date: "15 августа 2024",
        venue: "Arena Hall"
    },
    {
        city: "Краснодар",
        month: "сентябрь",
        date: "5 сентября 2024",
        venue: "Клуб «Гудвин»"
    },
    {
        city: "Краснодар",
        month: "октябрь",
        date: "19 октября 2024",
        venue: "Стадион «Краснодар»"
    },
    {
        city: "Калининград",
        month: "август",
        date: "24 августа 2024",
        venue: "Клуб «Город»"
    },
    {
        city: "Калининград",
        month: "сентябрь",
        date: "8 сентября 2024",
        venue: "Дом искусств"
    },
    {
        city: "Калининград",
        month: "октябрь",
        date: "22 октября 2024",
        venue: "Концертный зал «Янтарь»"
    },
    {
        city: "Ростов",
        month: "сентябрь",
        date: "7 сентября 2024",
        venue: "ДС «Ростов»"
    },
    {
        city: "Ростов",
        month: "сентябрь",
        date: "20 сентября 2024",
        venue: "Клуб «Подземка»"
    },
    {
        city: "Ростов",
        month: "октябрь",
        date: "11 октября 2024",
        venue: "Стадион «Ростов Арена»"
    },
    {
        city: "Екатеринбург",
        month: "сентябрь",
        date: "14 сентября 2024",
        venue: "КРК «Уралец»"
    },
    {
        city: "Екатеринбург",
        month: "сентябрь",
        date: "27 сентября 2024",
        venue: "Клуб «Театро»"
    },
    {
        city: "Екатеринбург",
        month: "октябрь",
        date: "15 октября 2024",
        venue: "ДИВС"
    },
    {
        city: "Челябинск",
        month: "сентябрь",
        date: "21 сентября 2024",
        venue: "Концерт-холл «Event-Hall»"
    },
    {
        city: "Челябинск",
        month: "октябрь",
        date: "5 октября 2024",
        venue: "Клуб «Молот»"
    },
    {
        city: "Челябинск",
        month: "октябрь",
        date: "18 октября 2024",
        venue: "Дворец спорта «Юность»"
    },
    {
        city: "Омск",
        month: "сентябрь",
        date: "28 сентября 2024",
        venue: "Концертный зал «Сибирь»"
    },
    {
        city: "Омск",
        month: "октябрь",
        date: "9 октября 2024",
        venue: "Клуб «Барселона»"
    },
    {
        city: "Омск",
        month: "октябрь",
        date: "25 октября 2024",
        venue: "Арена Омск"
    }
];

function loadConcerts() {
    const container = document.getElementById('concerts-list');
    
    concertsData.forEach(concert => {
        const concertItem = document.createElement('div');
        concertItem.className = 'concert-item';
        concertItem.setAttribute('data-city', concert.city);
        concertItem.setAttribute('data-month', concert.month);
        
        concertItem.innerHTML = `
            <div class="concert-info">
                <div class="concert-name">GUF</div>
                <div class="concert-date">${concert.date}</div>
                <div class="concert-city">${concert.city}</div>
                <div class="concert-venue">${concert.venue}</div>
            </div>
            <a href="https://doma.moscow/guf" class="period-icon" aria-label="Купить билеты" target="_blank"></a>
        `;
        
        container.appendChild(concertItem);
    });
}

document.addEventListener('DOMContentLoaded', loadConcerts);