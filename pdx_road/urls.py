from django.conf.urls import patterns, include, url
from django.contrib import admin
from pdx_road_app import views
from django.conf import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pdx_road.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^$', views.index, name='index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^make_submission/', views.make_submission, name='make_submission'),

)

# If index.html or nothing (/), then serve static html into url
###############################################################
if settings.DEBUG:
    urlpatterns += patterns(
        'django.contrib.staticfiles.views',
        url(r'^$', 'serve', kwargs={'path': 'html/pdx_road.html'}),
        url(r'^(?P<path>(?:js|css|img)/.*)$', 'serve'),
    )
    urlpatterns += patterns(
        '',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }),
    )