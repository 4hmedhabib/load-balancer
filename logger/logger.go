package logger

import (
	"log"
	"os"
)

// Log levels
const (
	InfoLevel = iota
	WarningLevel
	ErrorLevel
	DebugLevel
)

type Logger struct {
	Level int
	info  *log.Logger
	warn  *log.Logger
	error *log.Logger
	debug *log.Logger
}

var logger *Logger

func init() {
	logger = &Logger{
		Level: InfoLevel,
		info:  log.New(os.Stdout, "INFO: ", log.LstdFlags),
		warn:  log.New(os.Stdout, "WARN: ", log.LstdFlags),
		error: log.New(os.Stdout, "ERROR: ", log.LstdFlags|log.Lshortfile),
		debug: log.New(os.Stdout, "DEBUG: ", log.LstdFlags|log.Llongfile),
	}
}

// SetLevel Set log level
func SetLevel(level int) {
	logger.Level = level
}

//  Methods to log (at different levels)

func Info(message string) {
	if logger.Level <= InfoLevel {
		logger.info.Println(message)
	}
}

func Error(message string) {
	if logger.Level <= ErrorLevel {
		logger.error.Println(message)
	}
}

func Warning(message string) {
	if logger.Level <= WarningLevel {
		logger.warn.Println(message)
	}
}

func Debug(message string) {
	if logger.Level <= DebugLevel {
		logger.debug.Println(message)
	}
}
