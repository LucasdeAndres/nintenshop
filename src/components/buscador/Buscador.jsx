import React from 'react'

export function Buscador() {

    const SearchComponent = () => {
        const [searchTerm, setSearchTerm] = useState('');
      
        const handleInputChange = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const handleSearch = () => {
          // Aquí puedes realizar la lógica de búsqueda o enviar la búsqueda a otro componente
          console.log('Búsqueda realizada:', searchTerm);
        };

  return (
    <div className='buscador'>
        <input
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar..."
        />
        <button onClick={handleSearch}>Buscar</button>
    
    </div>
  )
}
}
