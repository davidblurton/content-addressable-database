hashdb
============================

A content addressable database backed by leveldb

```
> curl -X POST -d '{"name":"data from curl"}' -H "Content-Type:application/json" http://hashdb.davidblurton.me/data
8d824f2c14717f72de7a6ce47e057810d03b2001
```

```
> curl -X GET http://hashdb.davidblurton.me/data/8d824f2c14717f72de7a6ce47e057810d03b2001
{"name":"data from curl"}
```
