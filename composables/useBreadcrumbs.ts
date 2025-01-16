export function useBreadcrumbs(val: any) {
    const links: any = [];
    if (val) {
        val.map((e: any, index: number) => {
            if (e.text == 'Главная страница') {
                links.push({
                    icon: 'i-heroicons-home',
                    to: e.url,
                    'aria-label': 'хлебные крошки: Главная страница',
                });
            } else if (val.length == index) {
                links.push({
                    label: e.text,
                    to: e.url,
                    'aria-label': `хлебные крошки: ${e.text}`,
                });
            } else {
                links.push({
                    label: e.text,
                    'aria-label': `хлебные крошки: ${e.text}`,
                });
            }
        });
    }
    return links;
}
