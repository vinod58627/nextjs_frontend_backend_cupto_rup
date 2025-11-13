"use client"
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <ul className="d-flex justify-content-start list-unstyled gap-4 p-3 bg-success text-danger text-decoration-none">
                <li><Link href="/creationofroute">BasicRoute</Link></li>
                <li><Link href="/nestedrouting/customer">NestedRoute</Link></li>
                <li><Link href="/groupingroute/employees">GroupingRoute</Link></li>
                <li><Link href="/dynamicroutes/paramsroute/vinod">DynamicRoute</Link></li>
                <li><Link href="/dynamicroutes/paramsroute/vinod">CatchAllRoutes</Link></li>
                <li><Link href="/ssrvscsr/csr">SsrVsCsr</Link></li>
                <li><Link href="/routeruseRouter">Navigation</Link></li>
                <li><Link href="/users">Users List</Link></li>
                <li><Link href="/serverActions">Server Actions/CRUD Without Api</Link></li>
            </ul>
        </div>
    )
}

export default Header