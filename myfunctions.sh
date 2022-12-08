findmax() {
	ls -AQ |xargs du -sh |sort -h
}

findmaxroot() {
	cd /
	ls -AQ |egrep -v "proc|run" |xargs du -sh |sort -h
	cd - >/dev/null
}

