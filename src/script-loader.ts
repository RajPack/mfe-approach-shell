import { of, Subject, take } from 'rxjs';

const loadedURLs: string[] = [];

export function loadScript(url: string) {
  if (loadedURLs.includes(url)) {
    return of(null);
  }
  const load$ = new Subject();
  const script = document.createElement('script');
  script.setAttribute('src', url);
  script.addEventListener('load', () => onScriptLoad(url, load$));
  console.log(script);
  document.head.appendChild(script);
  return load$.pipe(take(1));
}

function onScriptLoad(url: string, load$: Subject<any>) {
  loadedURLs.push(url);
  load$.next(true);
}
