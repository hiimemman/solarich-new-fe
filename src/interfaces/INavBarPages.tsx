export interface INavBarPages {

    pageName: string,
    pageUrl: string,
    ifDropdown?: [
     { pageName: string , pageUrl: string },
     { pageName: string , pageUrl: string },
     { pageName: string , pageUrl: string },
    ]
}