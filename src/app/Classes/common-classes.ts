export class IEPModuleData {
    Icon: string = '';
    ModuleName: string = '';
    RouterLink: string = '';

    constructor(icon: string, name: string, link: string) {
        this.Icon = icon;
        this.ModuleName = name;
        this.RouterLink = link;
    }
}
