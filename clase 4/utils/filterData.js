export function filterData(data) {
    const filtro = data.map(user => ({user: user.name, phone: user.phone, id: user.id}));
    console.log(filtro);
}