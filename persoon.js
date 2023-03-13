const persons = [
	{
		voornaam: 'JPiet',
		achternaam: 'Heijn',
		nationaliteit: 'Nederlandse',
		leeftijd: 47,
		gewicht: 86
	},
	{
		voornaam: 'Masud',
		achternaam: 'Mohammed',
		nationaliteit: 'Iraans',
		leeftijd: 37,
		gewicht: 79
	},
    {
		voornaam: 'Klaas',
		achternaam: 'Wever',
		nationaliteit: 'Nederlandse',
		leeftijd: 73,
		gewicht: 85
	},
    {
		voornaam: 'Bjorn',
		achternaam: 'Hakke',
		nationaliteit: 'Zweeds',
		leeftijd: 18,
		gewicht: 71
	},
    {
		voornaam: 'Jouke',
		achternaam: 'Diekstra',
		nationaliteit: 'Fries',
		leeftijd: 29,
		gewicht: 82
	},
    {
		voornaam: 'Bo',
		achternaam: 'Wang',
		nationaliteit: 'Chinees',
		leeftijd: 38,
		gewicht: 65
	},
	{
		voornaam: 'Marie',
		achternaam: 'Visser',
		nationaliteit: 'Belgische',
		leeftijd: 42,
		gewicht: 69
	}
];

const tableBody = document.querySelector('#personTable tbody');

for (let person of persons) {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${person.voornaam}</td>
		<td>${person.achternaam}</td>
		<td>${person.nationaliteit}</td>
		<td>${person.leeftijd}</td>
		<td>${person.gewicht}</td>
	`;
	tableBody.appendChild(row);
}
