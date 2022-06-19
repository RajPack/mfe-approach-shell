import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ExternalPdpMfeContainerComponent } from './components/pdp-mfe-container/pdp-mfe-container.component';
import { PdpMfeResolverService } from './guards/pdp-mfe-resolver/pdp-mfe-resolver.service';

export function isMfeRoute(mfeStartPath: string) {
  return (url: UrlSegment[]) => {
    console.log(url);
    return url.length >= 1 && url[0].path.startsWith(mfeStartPath)
      ? { consumed: url }
      : null;
  };
}

const routes: Routes = [
  {
    path: 'pdp-same-app',
    loadChildren: () =>
      import('mfe-pdp/Module').then(({ PdpModule }) => PdpModule),
    resolve: { state: PdpMfeResolverService },
  },
  {
    matcher: isMfeRoute('pdp-another-app'),
    component: ExternalPdpMfeContainerComponent,
    pathMatch: 'prefix',
    resolve: { state: PdpMfeResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
