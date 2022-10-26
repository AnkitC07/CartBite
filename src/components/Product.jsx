import {
  TextField,
  IndexTable,
  TextStyle,
  Card,
  Filters,
  Select,
  useIndexResourceState,
  DisplayText,
  Icon,
} from '@shopify/polaris'
import { SearchMajor } from '@shopify/polaris-icons'
import compression from 'compression'
import { useState, useCallback, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import
import { MyContext } from '../context/MyContext'

function ProductTable() {
  const { setProductName } = useContext(MyContext)
  const [query, setQuery] = useState('')
  const search = (datas) => {
    // console.log(datas)
    return datas.filter((item) => item.name.toLowerCase().includes(query))
  }
  const customers = [
    {
      id: '3417',
      url: 'customers/341',
      name: 'Nike Sneakers 1',
      inventory: '240 in stock 10 variants',
      status: 'Active',
      disabledVariants: 'none',
    },
    {
      id: '3557',
      url: 'customers/355',
      name: 'Nike Sneakers 2',
      inventory: '240 in stock 16 variants',
      status: 'Active',
      disabledVariants: '8 variants',
    },
    {
      id: '3657',
      url: 'customers/365',
      name: 'Nike Sneakers 3',
      inventory: '240 in stock 16 variants',
      status: 'Inactive',
      disabledVariants: '1 variants',
    },
    {
      id: '3757',
      url: 'customers/375',
      name: 'Nike Sneakers 4',
      inventory: '240 in stock 16 variants',
      status: 'Active',
      disabledVariants: 'none',
    },
    {
      id: '3857',
      url: 'customers/385',
      name: 'Nike Sneakers 5',
      inventory: '240 in stock 16 variants',
      status: 'Active',
      disabledVariants: 'none',
    },
  ]
  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  }

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(customers)

  const [sortValue, setSortValue] = useState('active')
  // const tempCustomer = [...customers];

  const [filteredList, setFilteredList] = new useState(customers)

  // const filterBySearch = (event) => {
  //   // Access input value
  //           const query = event.target.value;
  // 		setQueryValue(query)
  //           console.log(queryValue)
  //           // Create copy of item list
  //           var updatedList = [...customers];
  //           // Include all elements which includes the search query
  //           updatedList = updatedList.filter((item) => {
  //             return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //           });
  //           // Trigger render with updated values
  //           setFilteredList(updatedList);
  // };

  const handleSortChange = useCallback(
    (value) => {
      setSortValue(value)
      // console.log(sortValue)
      // setFilteredList(customers.filter((item)=>item.status.toLowerCase().includes(sortValue)))
    },
    [sortValue],
  )

  useEffect(() => {
    setFilteredList(
      customers.filter((item) => item.status.toLowerCase().includes(sortValue)),
    )
    // console.log("second",filteredList)

    // console.log(filteredList.filter((item)=>item.status.toLowerCase().includes(sortValue)))
  }, [sortValue])

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ]
  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ]

  const sortOptions = [
    { label: 'Status', value: 'status', disabled: true },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ]
  const handleLinkClick = (event, name) => {
    setProductName(name)
  }

  //this is the tabel//
  const rowMarkup = search(filteredList).map(
    ({ id, name, inventory, status, disabledVariants }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <NavLink
            onClick={(event) => handleLinkClick(event, name)}
            to="/productSingle"
          >
            <TextStyle variation="strong">{name}</TextStyle>
          </NavLink>
        </IndexTable.Cell>
        <IndexTable.Cell>{inventory}</IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
        <IndexTable.Cell>{disabledVariants}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  )

  return (
    <div className="product_main">
      <div className="product_heading">
        <h2>Products</h2>
        <p>
          You can enable/disable the notification status of each product here
        </p>
      </div>
      <Card>
        <div className="product_box_main" style={{ display: 'flex' }}>
          <div className="search_filter" style={{ flex: 1 }}>
            <div className="search_icon">
              <Icon source={SearchMajor} color="base" />
            </div>

            <input
              type="text"
              name="search"
              id="searchFilter"
              className="search_box"
              placeholder="Search products"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="status_box" style={{ paddingLeft: '0.25rem' }}>
            <Select
              labelInline
              // label="Sort by"
              options={sortOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
          </div>
        </div>
        <div className="product_table">
          <IndexTable
            resourceName={resourceName}
            itemCount={customers.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            hasMoreItems
            bulkActions={bulkActions}
            promotedBulkActions={promotedBulkActions}
            lastColumnSticky
            headings={[
              { title: 'Product' },
              { title: 'Inventory' },
              { title: 'Status' },
              { title: 'Disabled Variants' },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </div>
      </Card>
    </div>
  )
}

export default ProductTable
