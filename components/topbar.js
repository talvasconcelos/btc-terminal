import TopAppBar from 'preact-material-components/TopAppBar'
import Drawer from 'preact-material-components/Drawer'
import List from 'preact-material-components/List'

const TopBar = ({erase}) => {
    const closeDrawer = () => this.drawer.MDComponent.open = false
    const openDrawer = () => this.drawer.MDComponent.open = true
    const drawerRef = drawer => (this.drawer = drawer)

    const resetURL = () => {
        erase()
        closeDrawer()
        return
    }

    return (
        <div class='nav'>
            <TopAppBar class="topappbar">
                <TopAppBar.Row>
                <TopAppBar.Section align-start>
                    <TopAppBar.Icon onClick={openDrawer}>apps</TopAppBar.Icon>
                    <TopAppBar.Title>
                    BTC TPA
                    </TopAppBar.Title>
                </TopAppBar.Section>
                </TopAppBar.Row>
            </TopAppBar>
            <Drawer 
                modal 
                ref={drawerRef}
            >
                <Drawer.DrawerContent>
                    <Drawer.DrawerItem selected onClick={resetURL}>
                        <List.ItemGraphic>cancel</List.ItemGraphic>
                        Reset BTCpay URL
                    </Drawer.DrawerItem>
                </Drawer.DrawerContent>
            </Drawer>
        </div>
    )
}

export default TopBar