export function useBreadcrumbs(val: any) {
    const links: any = [];
    if (val) {
        val.map((e: any, index: number) => {
            if (e.text == 'Главная страница') {
                links.push({
                    icon: 'i-heroicons-home',
                    to: e.url,
                });
            } else if (val.length == index) {
                links.push({
                    label: e.text,
                    to: e.url,
                });
            } else {
                links.push({
                    label: e.text,
                });
            }
        });
    }
    return links;
}
