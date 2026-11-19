function rootBase(): string {
	const base = import.meta.env.BASE_URL;
	if (!base || base === '/') return '/';
	return base.endsWith('/') ? base : `${base}/`;
}

/** Path from the site root, including the GitHub Pages base when one is set. */
export function sitePath(path = '/'): string {
	const base = rootBase();
	if (path === '/' || path === '') return base;
	if (path.startsWith('/#')) return `${base}#${path.slice(2)}`;
	return `${base}${path.replace(/^\//, '')}`;
}

/** A file in `public/`, prefixed with the site base. */
export function publicPath(file: string): string {
	return `${rootBase()}${file.replace(/^\//, '')}`;
}

function normalize(path: string): string {
	if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
	return path;
}

export function isCurrent(pathname: string, path: string): boolean {
	return normalize(pathname) === normalize(sitePath(path));
}
