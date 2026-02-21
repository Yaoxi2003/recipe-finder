import Dropdown from "./inputs/Dropdown"
import DropdownItem from "./inputs/DropdownItem"
import SearchBar from "./inputs/SearchBar"

export default function FilterRow({cookTime, setCookTime, preTime, setPreTime, searchInput, setSearchInput}) {

    const prepare = ['0 minutes', '5 minutes', '10 minutes', '15 minutes', '20 minutes']
    const cook = ['0 minutes', '5 minutes', '10 minutes', '15 minutes']

    const prepareDropdown = prepare.map(
        item => (
            <DropdownItem key={item} value={item} setSelected={setPreTime} >{item}</DropdownItem>
        ))

    const cookDropdown = cook.map(
        item => (
            <DropdownItem key={item} value={item} setSelected={setCookTime} >{item}</DropdownItem>
        ))

    if (searchInput) {
      console.log(searchInput)
    } 

  return (
    <div className="container-pro pd-sm">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">

          {/* Time filter dropdowns */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:items-cetner sm:flex-row">
              <Dropdown 
              label='Max Prep Time' 
              selected={preTime}
              setSelected={setPreTime}>
                  {prepareDropdown}
              </Dropdown>

              <Dropdown 
              label='Max Cook Time' 
              selected={cookTime}
              setSelected={setCookTime}>
                  {cookDropdown}
              </Dropdown>
          </div>
          
            {/* Search bar */}
            <SearchBar setSearchInput={setSearchInput}>Search by name or ingredient…</SearchBar>
        </div>
    </div>
  )
}
